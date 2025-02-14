export const permissions: Record<string, string[]> = {
  super_admin: ["manage_users", "manage_orders", "view_reports"],
  admin: ["manage_orders", "view_reports"],
  user: ["view_orders"],
};

// ตรวจสอบว่าผู้ใช้มีสิทธิ์หรือไม่
export function hasPermission(
  role: string | null | undefined,
  permission: string
) {
  if (!role) {
    console.error("Unauthorize Error");
    return false;
  }
  return permissions[role]?.includes(permission) ?? false;
}
