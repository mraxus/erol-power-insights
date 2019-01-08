'use strict';

const Homey = require('homey');

const fetchData = require('./src/fetch');
const { activePower, realEnergy } = require('./src/insights');
const { showError, showSuccess } = require('./src/visuals/LEDRingAnimations');

const { App } = Homey;

class ErolPowerInsightsApp extends App {
	async onInit() {
		const { name: { en: name }, version } = this.manifest;

		this.log(`'${name}' version ${version} is starting...`);

		setInterval(async () => {
			fetchData()
				.then(async ({ ActivePower, RealEnergy, DateTime }) => {
					const { error: eAP } = await activePower.logValue(ActivePower)
					const { error: eRE } = await realEnergy.logValue(RealEnergy)

					if (eAP || eRE) {
						this.error('Could not store data', eAP, eRE);
						showError();
					} else {
						this.log('Stored AP & RE')
						showSuccess();
					}
				})
				.catch(err => {
					this.error('Could not fetch data', err);
					showError();
				})
		}, 5000)

		await showSuccess(this.log);
	}

}

module.exports = ErolPowerInsightsApp;
