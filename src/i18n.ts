import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import commonEn from "./libs/i18n/en/common.json";
import loginPageEn from "./libs/i18n/en/login-page.json";
import overviewPageEn from "./libs/i18n/en/overview-page.json";
import ticketPageEn from "./libs/i18n/en/ticket-page.json";

import commonId from "./libs/i18n/id/common.json";
import loginPageId from "./libs/i18n/id/login-page.json";
import overviewPageId from "./libs/i18n/id/overview-page.json";
import ticketPageId from "./libs/i18n/id/ticket-page.json";
import LanguageDetector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
	en: {
		common: commonEn,
		loginPage: loginPageEn,
		overviewPage: overviewPageEn,
		ticketPage: ticketPageEn,
	},
	id: {
		common: commonId,
		loginPage: loginPageId,
		overviewPage: overviewPageId,
		ticketPage: ticketPageId,
	},
};

i18n
	.use(LanguageDetector)
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		fallbackLng: "en",

		ns: ["common", "loginPage", "overviewPage", "ticketPage"],
		defaultNS: "common",

		detection: {
			// order and from where user language should be detected
			order: [
				"cookie",
				"localStorage",
				"navigator",
				"htmlTag",
				"path",
				"subdomain",
			],

			// keys or params to lookup language from
			lookupCookie: "i18n", // name of the cookie
		},

		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
