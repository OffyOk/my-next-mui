## Getting Started

First, run the development server:

```bash
bun install
bun dev
```

## Folder Structure

📂 my-nextjs-project
│── 📂 src
│ │── 📂 app
│ │ │── 📂 (marketing) # กลุ่มหน้าสำหรับ public เช่น landing page
│ │ │ │── 📂 about
│ │ │ │ ├── page.tsx
│ │ │ │ ├── loading.tsx
│ │ │ │ ├── error.tsx
│ │ │ │ └── layout.tsx
│ │ │── 📂 (dashboard) # กลุ่มหน้าสำหรับ authenticated users
│ │ │ │── 📂 users
│ │ │ │ │── 📂 components # เก็บ Component ที่ใช้เฉพาะหน้านี้
│ │ │ │ │ │── UserCard.tsx
│ │ │ │ │ └── UserList.tsx
│ │ │ │ │── 📂 [id] # Dynamic route
│ │ │ │ │ ├── page.tsx
│ │ │ │ │ ├── loading.tsx
│ │ │ │ │ └── error.tsx
│ │ │ │── 📂 settings
│ │ │ │ │── 📂 components # เก็บ Component ที่ใช้เฉพาะหน้านี้
│ │ │ │ │ └── SettingForm.tsx
│ │ │ │ │── page.tsx
│ │ │── 📂 api # API routes (Server Actions / Edge API)
│ │ │ │── 📂 auth
│ │ │ │ │── route.ts
│ │ │ │── 📂 users
│ │ │ │ │── route.ts
│ │ └── layout.tsx
│ │── 📂 components # Shared UI Components
│ │ │── 📂 ui # Generic components เช่น Button, Modal
│ │ │── 📂 form # Form components เช่น Input, Select
│ │── 📂 hooks # Custom Hooks
│ │ │── useAuth.ts
│ │ │── useTheme.ts
│ │── 📂 lib # Utility functions, config, API clients
│ │ │── api.ts # Client API Calls
│ │ │── auth.ts # Auth helpers
│ │ │── db.ts # Database connection
│ │── 📂 services # Business Logic Layer
│ │ │── authService.ts
│ │ │── userService.ts
│ │── 📂 store # Zustand/Redux Store
│ │ │── authStore.ts
│ │ │── userStore.ts
│ │── 📂 styles # Global styles, Tailwind config
│ │ │── globals.css
│ │ │── theme.css
│ │── 📂 schemas
│ │ │── userSchema.ts # Schema validation ด้วย Zod
│ │── 📂 types # TypeScript interfaces/types
│ │ │── auth.d.ts
│ │ │── user.d.ts
│ │── 📂 utils # Helper functions
│ │ │── formatDate.ts
│ │ │── validateInput.ts
│── 📂 public # Static files (images, fonts)
│── 📂 tests # Test files (Jest, Cypress, Playwright)
│ │── 📂 e2e
│ │── 📂 unit
│── .env.development # Development Environment Variables
│── .env.production # Production Environment Variables
│── .env.local # Override Environment Variables
│── next.config.mjs # Next.js Config
│── tsconfig.json # TypeScript Config
│── tailwind.config.ts # Tailwind Config
│── package.json # Dependencies
│── README.md # Documentation

📌 อธิบายโครงสร้าง

1. app/
   ใช้ App Router (/src/app) ซึ่งเป็นโครงสร้างใหม่ของ Next.js 14
   แบ่งโฟลเดอร์หลักออกเป็น (marketing) และ (dashboard)
   (marketing): ส่วนของ public pages เช่น Landing Page, About
   (dashboard): ส่วนของ authenticated users เช่น Profile, Settings
   รองรับ API Routes (app/api) สำหรับ Server Actions และ REST API
2. components/
   เก็บ UI Components ที่สามารถนำกลับมาใช้ซ้ำได้ เช่น Button, Modal
   มีการแบ่งเป็น ui/ (generic UI) และ form/ (form-specific components)
3. hooks/
   เก็บ Custom Hooks เช่น useAuth.ts, useTheme.ts เพื่อแยก logic ออกจาก UI
4. lib/
   Utility functions สำหรับการเรียก API, auth, database connection
   ไฟล์ db.ts ใช้สำหรับการเชื่อมต่อฐานข้อมูล
5. services/
   แยก Business Logic ออกจาก UI โดยเก็บเป็น service functions เช่น authService.ts, userService.ts
6. store/
   จัดการ global state ด้วย Zustand หรือ Redux
7. schemas/
   เก็บ Zod schema สำหรับ validation
8. styles/
   เก็บไฟล์ CSS และ Tailwind configuration
9. types/
   เก็บ TypeScript types และ interfaces
10. utils/
    รวมฟังก์ชัน helper ที่ช่วยให้การพัฒนาโค้ดสะดวกขึ้น เช่น formatDate.ts
11. tests/
    เก็บไฟล์ทดสอบ (Jest, Cypress, Playwright)
12. .env
    - ถ้าไม่มี .env.local → จะใช้ค่าจาก .env.development หรือ .env.production
    - ถ้ามี .env.local → ค่าจาก .env.local จะ Override ค่าของ ENV ที่เหลือ

Business Logic ควรอยู่ที่ services/ (เช่น orderService.ts, productService.ts)
API Route (app/api/) ควรเรียกใช้ services/ เพื่อให้โค้ดสะอาด
Database Connection (lib/db.ts) ควรแยกต่างหาก
Utility (utils/) ควรใช้สำหรับฟังก์ชันทั่วไป เช่น Format หรือ Validation
📌 🔥 Best Practice: อย่าฝัง Business Logic ไว้ใน API Route หรือ Components เพราะจะทำให้โค้ดซับซ้อนและแก้ไขยาก 💡
