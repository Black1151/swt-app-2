import dayjs from 'dayjs';

export const formatDateSix = (date : string) => dayjs(date).format('DD/MM/YYYY')
