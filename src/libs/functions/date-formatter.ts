import { formatDate } from "date-fns";
import { enUS } from "date-fns/locale";

export const dateFormatter = (date: Date, dateFormat: string) => {
	return formatDate(date, dateFormat, {
		locale: enUS,
	});
};

export function getDateTimeFromTimestamp(unixTimeStamp: number) {
	let date = new Date(unixTimeStamp);
	return (
		("0" + date.getDate()).slice(-2) +
		"/" +
		("0" + (date.getMonth() + 1)).slice(-2) +
		"/" +
		date.getFullYear() +
		" " +
		("0" + date.getHours()).slice(-2) +
		":" +
		("0" + date.getMinutes()).slice(-2)
	);
}
