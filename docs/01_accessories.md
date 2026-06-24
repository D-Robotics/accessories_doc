---
sidebar_position: 1
slug: /accessories
---

# RDK 配件文档

RDK 配件文档汇总 D-Robotics RDK 开发者套件配套硬件模组的使用说明，帮助开发者快速完成选型、安装、点亮与二次开发。当前已收录双目摄像头模组（GS130W / GS130WI）与 IMU 模组等配件，后续将持续补充相机拓展板等更多配件内容。

## 文档结构

每款配件文档采用统一章节结构，便于按使用阶段查阅：

| 章节 | 说明 |
| --- | --- |
| 产品简介 | 产品特性、适用板卡、硬件接口与关键参数 |
| 安装连接 | 物品清单、接线/安装步骤与注意事项 |
| 快速开始 | SDK 或系统工具获取、示例运行与验证方法 |
| 硬件说明 | 结构尺寸、接口定义、拓扑与引脚说明 |
| 软件说明 | API 说明、驱动/SDK 使用与二次开发指引 |
| 资料下载 | 规格书、Datasheet、3D 图纸等参考资料 |

## 配件文档状态

下表列出当前配件文档收录情况。**可用**表示已提供完整在线手册，可点击配件名称进入对应章节；**暂无**表示文档尚未发布，敬请期待。

| 配件名称 | 适用平台 | 手册状态 |
| --- | --- | --- |
| [RDK IMU Module](./03_imu_module/01_product_overview.md) | RDK X5、RDK X5 Module、RDK S100、RDK S100P、RDK S600 | <span className="doc-status-badge doc-status-badge--available">可用</span> |
| [RDK Stereo Camera GS130W](./01_stereo_camera_gs130w/01_product_overview.md) | RDK X5、RDK X5 Module、RDK S100、RDK S100P、RDK S600 | <span className="doc-status-badge doc-status-badge--available">可用</span> |
| [RDK Stereo Camera GS130WI](./02_stereo_camera_gs130wi/01_product_overview.md) | RDK X5、RDK X5 Module、RDK S100、RDK S100P、RDK S600 | <span className="doc-status-badge doc-status-badge--available">可用</span> |
| RDK S100 相机拓展板 | RDK S100、RDK S100P | <span className="doc-status-badge doc-status-badge--unavailable">暂无</span> |
| RDK S100 MCU 相机拓展板 | RDK S100、RDK S100P | <span className="doc-status-badge doc-status-badge--unavailable">暂无</span> |
| RDK S600 相机拓展板 | RDK S600 | <span className="doc-status-badge doc-status-badge--unavailable">暂无</span> |
| RDK S600 MCU 相机拓展板 | RDK S600 | <span className="doc-status-badge doc-status-badge--unavailable">暂无</span> |

## 配件简介

**RDK Stereo Camera GS130W** 是基于 MIPI 的双目深度相机，搭载双颗 SC132GS 全局快门传感器，基线 80 mm，单路分辨率 1280×1080，最高 120 fps，适用于机器人视觉与机器视觉检测等场景。

**RDK Stereo Camera GS130WI** 在 GS130W 基础上集成 ICM-42688-P 六轴 IMU，基线 70 mm，单路分辨率 1080×1280，同样支持 HDR、高信噪比与近红外增强，适用于需要同步视觉与姿态感知的应用。

**RDK IMU Module** 采用 Bosch BMI088 六轴 IMU（三轴加速度计 + 三轴陀螺仪），支持 I2C/SPI 通信，板载 LED、蜂鸣器与 DS18B20 温度传感器，并提供 C / Python / ROS2 SDK，适用于机器人、无人机等运动感知场景。
