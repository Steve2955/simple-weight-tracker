<template>
	<div id="app">
		<h1>Simple Weight Tracker</h1>
		<input type="number" min="0" v-model="weight">
		<button type="button" name="button" @click="addRecord()">Hinzufügen</button>
		<ul>
			<li v-for="(record, index) in records" :key="index">
				{{record.weight}} - {{record.date | formatDate}}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			records: [],
			weight: 0,
		};
	},
	methods: {
		addRecord() {
			const { weight, records } = this;
			const date = Date.now();
			records.push({ weight, date });
		},
	},
	mounted() {
		if (localStorage.records) {
			this.records = JSON.parse(localStorage.records);
		}
	},
	watch: {
		records(newRecords) {
			localStorage.records = JSON.stringify(newRecords);
		},
	},
}
</script>
