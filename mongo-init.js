db = db.getSiblingDB("sensorhub");
db.createCollection("sensor_data");
db.sensor_data.createIndex({ device_id: 1 });
db.sensor_data.createIndex({ timestamp: 1 });
