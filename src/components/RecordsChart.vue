<template>
	<div class="card mb-3">
		<canvas id="weightChart" class="my-3"></canvas>
	</div>
</template>

<script>
import 'chart.js';

export default {
	name: 'RecordsChart',
	props: {
		records: Array,
	},
	data(){
		return {
			chart: undefined,
			config: undefined,
		};
	},
	mounted () {
		const ctx = document.getElementById('weightChart').getContext('2d');

		this.config = {
			type: 'line',
			data: {
				labels: this.records.map(record => new Date(record.date)),
				datasets: [{
					backgroundColor: '#F3969A',
					borderColor: '#E0878B',
					data: this.records.map(record => record.weight),
				}],
			},
			options: {
				legend: {
					display: false,
				},
				scales: {
					xAxes: [{
						type: 'time',
						time: {
							parser: 'MM/DD/YYYY HH:mm',
							tooltipFormat: 'll HH:mm',
						},
						scaleLabel: {
							display: false,
						}
					}],
					yAxes: [{
						scaleLabel: {
							display: false,
						}
					}]
				},
			},
		};

		// eslint-disable-next-line
		this.chart = new Chart(ctx, this.config);
	},
	watch: {
		records: function (newRecords) {
			this.config.data.labels = newRecords.map(record => new Date(record.date));
			this.config.data.datasets[0].data = newRecords.map(record => record.weight);
			this.chart.update();
		},
	},
}
</script>
