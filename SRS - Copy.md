# Software Requirements Specification (SRS)
## GoTaxi — Cab Hailing Application

**Version:** 1.0
**Date:** 2026-05-01
**Prepared for:** GoTaxi Project

---

## Table of Contents
1. [Introduction](#1-introduction)
2. [Overall Description](#2-overall-description)
3. [Specific Requirements](#3-specific-requirements)
4. [External Interface Requirements](#4-external-interface-requirements)
5. [Non-Functional Requirements](#5-non-functional-requirements)
6. [System Diagrams](#6-system-diagrams)

---

## 1. Introduction

### 1.1 Purpose
This Software Requirements Specification (SRS) describes the functional and non-functional requirements of **GoTaxi**, a cab-hailing application that connects passengers (riders) with drivers in real time. This document is intended for developers, designers, project managers, testers, and stakeholders.

### 1.2 Scope
GoTaxi is a multi-platform mobility application enabling users to:
- Book on-demand or scheduled rides
- Track drivers in real time
- Make cashless payments
- Rate trips and view ride history
- Allow drivers to accept rides, manage trips, and view earnings

The system serves three primary actors: **Rider**, **Driver**, and **Administrator**.

### 1.3 Definitions, Acronyms, Abbreviations
| Term | Meaning |
|------|---------|
| SRS  | Software Requirements Specification |
| ETA  | Estimated Time of Arrival |
| OTP  | One-Time Password |
| GPS  | Global Positioning System |
| UI/UX | User Interface / User Experience |
| API  | Application Programming Interface |

### 1.4 References
- IEEE 830-1998: Recommended Practice for Software Requirements Specifications
- GoTaxi Figma & Stitch design prototypes
- Project repository `README.md`

### 1.5 Overview
Section 2 gives an overall description of the product. Section 3 details specific functional requirements. Section 4 describes interfaces. Section 5 captures non-functional requirements. Section 6 contains the required diagrams (Use Case, Class, Sequence, Activity, ER, DFD, Component, Deployment).

---

## 2. Overall Description

### 2.1 Product Perspective
GoTaxi is a self-contained product with mobile and web clients backed by a cloud service. It integrates with third-party services for maps, payments, and SMS/OTP.

### 2.2 Product Features (high level)
- User registration and authentication (OTP-based)
- Location search and ride booking
- Real-time driver matching and tracking
- In-app payment (card, wallet, cash)
- Trip rating and feedback
- Driver dashboard (online/offline, accept/reject, earnings)
- Admin oversight (users, drivers, fares, disputes)

### 2.3 User Classes and Characteristics
| Actor | Description |
|-------|-------------|
| Rider | End user booking rides via the app |
| Driver | Vehicle operator fulfilling ride requests |
| Admin | Operations staff managing users, fares and disputes |
| Payment Gateway | External system processing transactions |
| Map Provider | External GPS/geocoding service |

### 2.4 Operating Environment
- Mobile: Android 9+, iOS 14+
- Web: Modern browsers (Chrome, Safari, Firefox, Edge — last 2 versions)
- Backend: Cloud-hosted (Linux), REST/HTTPS, WebSocket for live tracking

### 2.5 Design and Implementation Constraints
- Tailwind CSS / Material-style design language
- Real-time updates require WebSocket or push notifications
- Compliance with local transportation regulations
- All communications over TLS

### 2.6 Assumptions and Dependencies
- Users have internet connectivity and GPS-enabled devices
- A third-party map service is available
- A payment gateway provider is integrated

---

## 3. Specific Requirements

### 3.1 Functional Requirements

#### FR-1: User Registration & Login
- **FR-1.1** The system shall allow a new user to register using phone number and OTP verification.
- **FR-1.2** The system shall support login via OTP or saved session token.
- **FR-1.3** The system shall allow profile editing (name, photo, email, payment methods).

#### FR-2: Ride Booking
- **FR-2.1** The system shall allow a rider to enter pickup and drop-off locations using map search.
- **FR-2.2** The system shall display available ride classes (Economy, Premium, XL) with fare estimates and ETAs.
- **FR-2.3** The system shall allow a rider to confirm a booking and select payment method.
- **FR-2.4** The system shall match the request to the nearest available driver.
- **FR-2.5** The system shall support scheduled rides for a future date/time.

#### FR-3: Real-Time Tracking
- **FR-3.1** The system shall display the assigned driver's live location on a map.
- **FR-3.2** The system shall show ETA, vehicle details, and driver name/rating.
- **FR-3.3** The system shall allow the rider to share trip status with a contact.

#### FR-4: Payment
- **FR-4.1** The system shall support cash, credit/debit card, and in-app wallet.
- **FR-4.2** The system shall generate a fare receipt at trip completion.
- **FR-4.3** The system shall apply promo codes/discounts when valid.

#### FR-5: Ratings & Feedback
- **FR-5.1** The system shall prompt rider and driver to rate each other (1–5 stars) after every trip.
- **FR-5.2** The system shall allow optional written feedback.

#### FR-6: Driver Module
- **FR-6.1** The system shall let drivers toggle online/offline status.
- **FR-6.2** The system shall notify drivers of incoming ride requests with accept/reject options (timeout based).
- **FR-6.3** The system shall display daily/weekly earnings and trip activity.

#### FR-7: Notifications
- **FR-7.1** The system shall send push/SMS notifications for booking confirmations, driver arrival, and payment receipts.

#### FR-8: Admin
- **FR-8.1** The system shall allow admins to manage user/driver accounts, fares, promotions, and disputes.

### 3.2 Non-Functional Requirements
See [Section 5](#5-non-functional-requirements).

---

## 4. External Interface Requirements

### 4.1 User Interfaces
- Mobile-first responsive UI
- Screens: Splash, Login/OTP, Home, Booking, Tracking, Payment, Rating, Profile, Activity/History, Driver Dashboard

### 4.2 Hardware Interfaces
- GPS sensor for location services
- Camera (driver/vehicle verification, profile photos)

### 4.3 Software Interfaces
- Map/Geocoding API (e.g., Google Maps / Mapbox)
- Payment Gateway API (e.g., Stripe / local processor)
- SMS gateway for OTP
- Push notification service (FCM / APNs)

### 4.4 Communication Interfaces
- HTTPS REST APIs
- WebSocket for real-time tracking
- TLS 1.2+ encryption

---

## 5. Non-Functional Requirements

| Category | Requirement |
|----------|-------------|
| Performance | Booking request matched within ≤ 5 seconds under normal load |
| Scalability | Support 10,000 concurrent active users in pilot phase |
| Availability | 99.5% uptime monthly |
| Security | TLS in transit, AES-256 at rest, OWASP Top 10 mitigations, OTP-based auth |
| Usability | First-time booking achievable in ≤ 3 taps from home screen |
| Reliability | Graceful retry on network loss; no double charges |
| Maintainability | Modular code (CSS, JS modules already separated) |
| Portability | Works on Android, iOS, modern desktop browsers |

---

## 6. System Diagrams

> Diagrams below use Mermaid syntax. Render with any Mermaid-compatible viewer (GitHub, VS Code Mermaid Preview, mermaid.live).

### 6.1 Use Case Diagram

```mermaid
graph LR
    Rider((Rider))
    Driver((Driver))
    Admin((Admin))
    PG((Payment<br/>Gateway))
    Map((Map<br/>Service))

    UC1[Register / Login]
    UC2[Book Ride]
    UC3[Track Ride]
    UC4[Make Payment]
    UC5[Rate Trip]
    UC6[View History]
    UC7[Toggle Online/Offline]
    UC8[Accept/Reject Ride]
    UC9[View Earnings]
    UC10[Manage Users & Fares]
    UC11[Resolve Disputes]

    Rider --- UC1
    Rider --- UC2
    Rider --- UC3
    Rider --- UC4
    Rider --- UC5
    Rider --- UC6

    Driver --- UC1
    Driver --- UC7
    Driver --- UC8
    Driver --- UC9
    Driver --- UC5

    Admin --- UC10
    Admin --- UC11

    UC4 --- PG
    UC2 --- Map
    UC3 --- Map
```

### 6.2 Class Diagram

```mermaid
classDiagram
    class User {
        +String userId
        +String name
        +String phone
        +String email
        +String passwordHash
        +login()
        +logout()
        +updateProfile()
    }

    class Rider {
        +List~Ride~ rideHistory
        +List~PaymentMethod~ paymentMethods
        +bookRide()
        +rateDriver()
    }

    class Driver {
        +String licenseNo
        +Vehicle vehicle
        +boolean online
        +float rating
        +acceptRide()
        +completeRide()
        +toggleStatus()
    }

    class Vehicle {
        +String plateNo
        +String model
        +String type
        +int capacity
    }

    class Ride {
        +String rideId
        +Location pickup
        +Location dropoff
        +DateTime requestedAt
        +String status
        +float fare
        +calculateFare()
        +updateStatus()
    }

    class Payment {
        +String paymentId
        +float amount
        +String method
        +String status
        +process()
    }

    class Rating {
        +int score
        +String comment
        +DateTime createdAt
    }

    class Admin {
        +manageUsers()
        +setFare()
        +resolveDispute()
    }

    User <|-- Rider
    User <|-- Driver
    User <|-- Admin
    Driver "1" --> "1" Vehicle
    Rider "1" --> "*" Ride
    Driver "1" --> "*" Ride
    Ride "1" --> "1" Payment
    Ride "1" --> "*" Rating
```

### 6.3 Sequence Diagram — Book a Ride

```mermaid
sequenceDiagram
    actor R as Rider
    participant App as GoTaxi App
    participant API as Backend API
    participant M as Map Service
    participant DB as Database
    participant D as Driver App
    participant PG as Payment Gateway

    R->>App: Enter pickup & destination
    App->>M: Geocode + route + fare estimate
    M-->>App: Coordinates, ETA, fare
    App-->>R: Show options
    R->>App: Confirm booking
    App->>API: POST /rides
    API->>DB: Create ride (status=REQUESTED)
    API->>D: Push ride request (nearest driver)
    D-->>API: Accept
    API->>DB: status=ACCEPTED
    API-->>App: Driver assigned
    App-->>R: Show driver + live ETA
    Note over R,D: Trip in progress
    D->>API: Trip completed
    API->>PG: Charge rider
    PG-->>API: Payment OK
    API->>DB: status=COMPLETED
    API-->>App: Receipt
    App-->>R: Prompt rating
```

### 6.4 Activity Diagram — Ride Lifecycle

```mermaid
flowchart TD
    A([Start]) --> B[Rider opens app]
    B --> C{Logged in?}
    C -- No --> D[Login / OTP]
    C -- Yes --> E[Enter pickup & drop]
    D --> E
    E --> F[Show fare & ETA]
    F --> G{Confirm?}
    G -- No --> E
    G -- Yes --> H[Match nearest driver]
    H --> I{Driver accepts?}
    I -- No --> H
    I -- Yes --> J[Driver arrives at pickup]
    J --> K[Trip in progress]
    K --> L[Trip completed]
    L --> M[Process payment]
    M --> N{Payment success?}
    N -- No --> M
    N -- Yes --> O[Generate receipt]
    O --> P[Rate driver / rider]
    P --> Q([End])
```

### 6.5 Entity Relationship (ER) Diagram

```mermaid
erDiagram
    USER ||--o{ RIDE : "books / drives"
    USER ||--o{ PAYMENT_METHOD : "owns"
    DRIVER ||--|| VEHICLE : "drives"
    RIDE ||--|| PAYMENT : "has"
    RIDE ||--o{ RATING : "receives"
    USER ||--o{ RATING : "gives"

    USER {
        string user_id PK
        string name
        string phone
        string email
        string role
        datetime created_at
    }
    DRIVER {
        string driver_id PK
        string user_id FK
        string license_no
        float rating
        boolean online
    }
    VEHICLE {
        string vehicle_id PK
        string driver_id FK
        string plate_no
        string model
        string type
    }
    RIDE {
        string ride_id PK
        string rider_id FK
        string driver_id FK
        string pickup
        string dropoff
        datetime requested_at
        string status
        float fare
    }
    PAYMENT {
        string payment_id PK
        string ride_id FK
        float amount
        string method
        string status
    }
    PAYMENT_METHOD {
        string pm_id PK
        string user_id FK
        string type
        string token
    }
    RATING {
        string rating_id PK
        string ride_id FK
        string from_user FK
        int score
        string comment
    }
```

### 6.6 Data Flow Diagram (Level 1)

```mermaid
flowchart LR
    R((Rider))
    D((Driver))
    A((Admin))

    P1[[1.0 Authenticate User]]
    P2[[2.0 Book Ride]]
    P3[[3.0 Match & Dispatch]]
    P4[[4.0 Track Ride]]
    P5[[5.0 Process Payment]]
    P6[[6.0 Rate Trip]]

    DS1[(Users DB)]
    DS2[(Rides DB)]
    DS3[(Payments DB)]

    R -- credentials --> P1 --> DS1
    R -- ride request --> P2 --> DS2
    P2 -- match --> P3
    P3 -- assignment --> D
    D -- location --> P4 --> R
    P4 -- trip end --> P5 --> DS3
    P5 -- receipt --> R
    R -- rating --> P6 --> DS2
    D -- rating --> P6
    A -- queries --> DS1
    A -- queries --> DS2
    A -- queries --> DS3
```

### 6.7 Component Diagram

```mermaid
flowchart TB
    subgraph Client
        MA[Mobile App<br/>Rider/Driver]
        WA[Web App]
    end

    subgraph Backend["Backend Services"]
        AUTH[Auth Service]
        BOOK[Booking Service]
        MATCH[Matching Engine]
        TRACK[Tracking / WebSocket]
        PAY[Payment Service]
        NOTIF[Notification Service]
        RATE[Rating Service]
    end

    subgraph External["External APIs"]
        MAP[Map / Geocoding]
        PG[Payment Gateway]
        SMS[SMS / OTP]
        PUSH[FCM / APNs]
    end

    DB[(Primary DB)]
    CACHE[(Redis Cache)]

    MA --> AUTH
    MA --> BOOK
    MA --> TRACK
    MA --> PAY
    MA --> RATE
    WA --> AUTH
    WA --> BOOK

    BOOK --> MATCH
    MATCH --> NOTIF
    BOOK --> DB
    AUTH --> DB
    PAY --> DB
    RATE --> DB
    TRACK --> CACHE

    AUTH --> SMS
    BOOK --> MAP
    TRACK --> MAP
    PAY --> PG
    NOTIF --> PUSH
```

### 6.8 Deployment Diagram

```mermaid
flowchart TB
    subgraph Devices
        Phone[Rider / Driver<br/>Mobile Device]
        Browser[Admin Browser]
    end

    subgraph Cloud["Cloud Infrastructure"]
        LB[Load Balancer<br/>HTTPS]
        subgraph App["Application Servers"]
            API1[API Server 1]
            API2[API Server 2]
            WS[WebSocket Server]
        end
        subgraph Data["Data Layer"]
            SQL[(Relational DB<br/>PostgreSQL)]
            REDIS[(Redis)]
        end
    end

    subgraph Third["Third-Party"]
        MAPS[Map Provider]
        STRIPE[Payment Gateway]
        FCM[Push Service]
    end

    Phone -->|HTTPS / WSS| LB
    Browser -->|HTTPS| LB
    LB --> API1
    LB --> API2
    LB --> WS
    API1 --> SQL
    API2 --> SQL
    WS --> REDIS
    API1 --> REDIS
    API1 --> MAPS
    API1 --> STRIPE
    API1 --> FCM
```

---

## Appendix A — Traceability Summary
| Requirement | Use Case | Module |
|-------------|----------|--------|
| FR-1 | Register/Login | Auth Service |
| FR-2 | Book Ride | Booking Service |
| FR-3 | Track Ride | Tracking Service |
| FR-4 | Make Payment | Payment Service |
| FR-5 | Rate Trip | Rating Service |
| FR-6 | Driver Dashboard | Driver Module |
| FR-7 | Notifications | Notification Service |
| FR-8 | Admin Ops | Admin Console |

---

*End of Document.*
