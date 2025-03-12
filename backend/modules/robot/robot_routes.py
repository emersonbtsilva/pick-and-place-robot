from flask import Blueprint, jsonify
import serial


#TODO Validar criação de rota para teste de conexão bluetooth do robô

# bluetooth_bp = Blueprint('bluetooth', __name__)


# bluetooth_port = "COM3"
# baud_rate = 9600

# @bluetooth_bp.route('/check_connection', methods=['GET'])
# def check_connection():
#     try:
#         arduino = serial.Serial(bluetooth_port, baud_rate, timeout=2)
#         if arduino.is_open:
#             response = {
#                 "message": "Bluetooth connection established successfully",
#                 "port": bluetooth_port,
#                 "baud_rate": baud_rate,
#                 "status": "open"
#             }
#             arduino.close()
#             return jsonify(response), 200
#         else:
#             return jsonify({"message": "Failed to open Bluetooth connection", "status": "closed"}), 500
#     except serial.SerialException as e:
#         return jsonify({"error": f"Serial connection error: {str(e)}"}), 500
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500
