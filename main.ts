APDS9930.init()
APDS9930.ProximityEnable(true)
basic.forever(() => {
    serial.writeValue("ID", APDS9930.deviceID())
    serial.writeValue("ALS", APDS9930.getALS())
    serial.writeValue("Prox", APDS9930.getProximity())
    basic.pause(500)
})
