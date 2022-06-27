export {};

if ('wakeLock' in navigator) {
	// Screen Wake Lock API supported 🎉
	const requestWakeLock = async () => {
		try {
			await navigator.wakeLock.request('screen');
		} catch (err) {
			console.error(`${err.name}, ${err.message}`);
		}
	};
	requestWakeLock();
}
