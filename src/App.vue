<template>
	<div id="app">
		<Header @openAddRecordModal="showAddRecordModal = true"/>
		<div class="container">
			<RecordsList :records="records"/>
		</div>
		<AddRecordModal :active.sync="showAddRecordModal" @addRecord="addRecord"/>
	</div>
</template>

<script>
import Header from '@/components/Header.vue';
import RecordsList from '@/components/RecordsList.vue';
import AddRecordModal from '@/components/AddRecordModal.vue';

export default {
	name: 'App',
	components: {
		Header,
		RecordsList,
		AddRecordModal,
	},
	data() {
		return {
			records: [],
			weight: undefined,
			showAddRecordModal: false,
		};
	},
	methods: {
		addRecord(weight) {
			const { records } = this;
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

<style scoped>
#app{
	margin-top: 5rem!important;
}
</style>
