import numpy as np
import tensorflow as tf
import keras
import json
from fastapi import FastAPI, HTTPException, UploadFile, File
from PIL import Image
import io
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

model_path = os.path.join(BASE_DIR, "model", "kisan_model_final.keras")
labels_path = os.path.join(BASE_DIR, "model", "class_indices.json")

app = FastAPI()

MODEL = None
CLASS_NAMES = None

print("⏳ Loading Keras Model and Labels...")

try:
    MODEL = keras.models.load_model(model_path)
    print("✅ Model loaded successfully!")
except Exception as e:
    print(f"❌ CRITICAL ERROR: Could not load model. {e}")

try:
    with open(labels_path, "r") as f:
        CLASS_NAMES = json.load(f)
    print(f"✅ Loaded {len(CLASS_NAMES)} class labels.")
except Exception as e:
    print(f"❌ CRITICAL ERROR: Could not load class_indices.json. {e}")


# --- 2. HELPER FUNCTION ---
def format_result(class_name, confidence):
    """
    Parses 'Potato___Late_blight' into Plant: Potato, Disease: Late blight
    """
    # Default values
    plant = class_name
    disease = "Unknown"

    # Standard PlantVillage format uses "___" to separate plant and disease
    if "___" in class_name:
        parts = class_name.split("___")
        plant = parts[0]
        disease = parts[1].replace("_", " ") # Replace underscores with spaces
    
    return {
        "plant": plant,
        "disease": disease,
        "confidence": float(round(confidence, 4))
    }

# --- 3. PREDICTION ENDPOINT ---
@app.post("/api/ml-predict")
async def predict(file: UploadFile = File(...)):
    if MODEL is None or CLASS_NAMES is None:
        raise HTTPException(status_code=500, detail="Model system is not ready.")

    try:
        contents = await file.read()
        image = Image.open(io.BytesIO(contents)).convert("RGB")
        
        image = image.resize((224, 224))
        
        img_array = np.array(image)
        
        img_array = np.expand_dims(img_array, axis=0)

        predictions = MODEL.predict(img_array)
        
        predicted_index = np.argmax(predictions[0])
        confidence = np.max(predictions[0])
        predicted_label = CLASS_NAMES[predicted_index]

        response = format_result(predicted_label, confidence)
        
        return response

    except Exception as e:
        print(f"Error during prediction: {e}")
        raise HTTPException(status_code=500, detail="Prediction failed")

@app.get("/")
def home():
    return {"message": "Kisan Mitra AI Service is Running 🚀"}