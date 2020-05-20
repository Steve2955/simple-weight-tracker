<template>
	<div class="page-container">
		<md-app md-waterfall md-mode="fixed">
			<md-app-toolbar class="md-primary">
				<span class="md-title">Simple Weight Tracker</span>
			</md-app-toolbar>
			<md-app-content>
				<md-card>
					<md-card-header>
						<div class="md-title">Add new Record</div>
					</md-card-header>
					<md-card-content>
						<md-field>
							<label>Weight</label>
							<md-input v-model="weight" type="number"></md-input>
						</md-field>
						<md-button class="md-raised md-primary" @click="addRecord">Add Record</md-button>
					</md-card-content>
				</md-card>
				<RecordsList :records="records" style="margin-top: 24px"/>
			</md-app-content>
		</md-app>
	</div>
</template>

<script>
import RecordsList from './components/RecordsList.vue';

export default {
	name: 'App',
	components: {
		RecordsList,
	},
	data() {
		return {
			records: [],
			weight: undefined,
			showNewRecordDialog: false,
			showNumberError: false,
		};
	},
	methods: {
		addRecord() {
			let { weight, records } = this;
			const date = Date.now();
			weight = parseFloat(weight);
			if(isNaN(weight)){
				this.showNumberError = true;
				return;
			}
			records.push({ weight, date });
			this.weight = undefined;
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
