<template>
	<div id="app">
		<Header @openAddRecordModal="showAddRecordModal = true"/>
		<div class="container">
			<RecordsChart v-if="records.length > 1" :records="records"/>
			<RecordsList :records="records" @removeRecord="removeRecord" @editRecord="editRecord"/>
		</div>
		<AddRecordModal :active.sync="showAddRecordModal" @addRecord="addRecord"/>
		<EditRecordModal :active.sync="showEditRecordModal" :record="record" @updateRecord="updateRecord"/>
	</div>
</template>

<script>
import Header from '@/components/Header.vue';
import RecordsList from '@/components/RecordsList.vue';
import RecordsChart from '@/components/RecordsChart.vue';
import AddRecordModal from '@/components/AddRecordModal.vue';
import EditRecordModal from '@/components/EditRecordModal.vue';

export default {
	name: 'App',
	components: {
		Header,
		RecordsList,
		RecordsChart,
		AddRecordModal,
		EditRecordModal,
	},
	data() {
		return {
			records: [],
			weight: undefined,
			record: undefined,
			showAddRecordModal: false,
			showEditRecordModal: false,
		};
	},
	methods: {
		addRecord(weight) {
			const { records } = this;
			const date = Date.now();
			records.push({ weight, date });
		},
		editRecord(record){
			this.record = Object.assign({}, record); // copy-by-value
			this.showEditRecordModal = true;
		},
		updateRecord(record){
			const { records } = this;
			const i = records.findIndex(({date}) => date === record.date);
			this.$set(records, i, record);
			this.record = undefined;
		},
		removeRecord(record) {
			let { records } = this;
			const i = records.findIndex(({date}) => date === record.date);
			if(i === -1) return;
			records.splice(i,1);
		}
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

<style scoped>
#app{
	margin-top: 5rem!important;
}
</style>
