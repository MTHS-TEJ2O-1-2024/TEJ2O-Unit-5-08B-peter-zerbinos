/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Peter Zerbinos
 * Created on: Oct 2024
 * This program move forward & back up + turn 90° turn
*/

//variables
let distanceToObject: number = 0

//setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

distanceToObject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
)

//motor loop
while (true) {
        //move forward 10 cm if distanceToObject > 10
        if (distanceToObject > 10) {
        robotbit.StpCarMove(10, 65)
        distanceToObject = sonar.ping(
            DigitalPin.P1,
            DigitalPin.P2,
            PingUnit.Centimeters
        )
    }
        //move backwards & make 90° turn 10 cm if distanceToObject < 10
        if (distanceToObject < 10) {
        robotbit.MotorStopAll()
        robotbit.StpCarMove(-10, 65)
        robotbit.StepperDual(90, -90)
        }
}

