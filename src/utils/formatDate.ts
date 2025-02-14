import dayjs from "dayjs";

const apiFormatDate = (v: string) => dayjs(v).format("YYYY-MM-DD");

export default apiFormatDate;
