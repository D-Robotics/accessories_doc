---
sidebar_position: 1
slug: /accessories
---

# RDK Accessories Documentation

The RDK Accessories Documentation collects usage guides for hardware modules that ship with D-Robotics RDK developer kits, helping developers quickly complete product selection, installation, bring-up, and secondary development. Currently documented accessories include stereo camera modules (GS130W / GS130WI) and the IMU module, with more content such as camera expansion boards to be added in the future.

## Documentation Structure

Each accessory document follows a unified chapter structure, making it easy to look up information by usage phase:

| Chapter | Description |
| --- | --- |
| Product Overview | Product features, compatible boards, hardware interfaces, and key specifications |
| Installation & Connection | Bill of materials, wiring/installation steps, and notes |
| Quick Start | SDK or system tool acquisition, example execution, and verification methods |
| Hardware | Mechanical dimensions, interface definitions, topology, and pin descriptions |
| Software | API documentation, driver/SDK usage, and secondary development guidance |
| Downloads | Reference materials such as spec sheets, datasheets, and 3D drawings |

## Accessory Documentation Status

The table below lists the current status of accessory documentation. **Available** indicates a complete online manual is provided—click the accessory name to navigate to its chapters. **Not yet available** means the documentation has not been published yet; stay tuned.

| Accessory Name | Compatible Platforms | Manual Status |
| --- | --- | --- |
| [RDK IMU Module](./03_imu_module/01_product_overview.md) | RDK X5, RDK X5 Module, RDK S100, RDK S100P, RDK S600 | <span className="doc-status-badge doc-status-badge--available">Available</span> |
| [RDK Stereo Camera GS130W](./01_stereo_camera_gs130w/01_product_overview.md) | RDK X5, RDK X5 Module, RDK S100, RDK S100P, RDK S600 | <span className="doc-status-badge doc-status-badge--available">Available</span> |
| [RDK Stereo Camera GS130WI](./02_stereo_camera_gs130wi/01_product_overview.md) | RDK X5, RDK X5 Module, RDK S100, RDK S100P, RDK S600 | <span className="doc-status-badge doc-status-badge--available">Available</span> |
| RDK S100 Camera Expansion Board | RDK S100, RDK S100P | <span className="doc-status-badge doc-status-badge--unavailable">Not yet available</span> |
| RDK S100 MCU Camera Expansion Board | RDK S100, RDK S100P | <span className="doc-status-badge doc-status-badge--unavailable">Not yet available</span> |
| RDK S600 Camera Expansion Board | RDK S600 | <span className="doc-status-badge doc-status-badge--unavailable">Not yet available</span> |
| RDK S600 MCU Camera Expansion Board | RDK S600 | <span className="doc-status-badge doc-status-badge--unavailable">Not yet available</span> |

## Accessory Overview

**RDK Stereo Camera GS130W** is a MIPI-based stereo depth camera featuring dual SC132GS global shutter sensors, an 80 mm baseline, single-channel resolution of 1280×1080, and up to 120 fps output. It is suited for robotics vision and machine vision inspection applications.

**RDK Stereo Camera GS130WI** builds on the GS130W with an integrated ICM-42688-P 6-axis IMU, a 70 mm baseline, and single-channel resolution of 1080×1280. It also supports HDR, high SNR, and near-infrared enhancement, making it suitable for applications that require synchronized vision and motion sensing.

**RDK IMU Module** uses the Bosch BMI088 6-axis IMU (3-axis accelerometer + 3-axis gyroscope), supports I2C/SPI communication, and includes onboard LED, buzzer, and DS18B20 temperature sensor. C / Python / ROS2 SDKs are provided, making it suitable for motion sensing in robotics, drones, and similar applications.
