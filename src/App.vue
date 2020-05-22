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
			let { records } = this;
			const date = Date.now();
			const id = this.$uuid.v1();
			records.push({ weight, date, id });
			records = records.sort((a, b) => a.date - b.date);
		},
		editRecord(record){
			this.record = Object.assign({}, record); // copy-by-value
			this.showEditRecordModal = true;
		},
		updateRecord(record){
			this._records = this._records.map(r => (r.id === record.id)?record:r);
			this.record = undefined;
		},
		removeRecord(record) {
			let { _records } = this;
			const i = _records.findIndex(({id}) => id === record.id);
			if(i === -1) return;
			_records.splice(i,1);
		}
	},
	mounted() {
		if (localStorage.records) {
			this._records = JSON.parse(localStorage.records);
		}
	},
	computed: {
		_records: {
			get(){
				return this.records;
			},
			set(newRecords){
				newRecords = newRecords.map(record => {
					if(!(record.date instanceof Date)) record.date = new Date(record.date);
					return record;
				});
				this.records = newRecords.sort((a,b) => b.date - a.date);
			}
		}
	},
	watch: {
		_records(newRecords) {
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
