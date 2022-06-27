import Bowser from 'bowser';
export const browser = Bowser.getParser(window.navigator.userAgent);
export const isSafariIOS =
	browser.getBrowserName(true) == 'safari' &&
	browser.getOSName(true) == 'ios';
