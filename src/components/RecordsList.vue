<template>
	<div class="card mb-3">
		<div v-if="records.length" class="card-body">
			<div v-for="(record, index) in records" :key="index">
				<RecordListItem :record="record"/>
				<hr v-if="index !== records.length-1"/>
			</div>
		</div>
		<div v-else class="card-body mt-3">
			<p  class="text-center h-4">No records, yet</p>
		</div>
	</div>
</template>

<script>
import RecordListItem from '@/components/RecordListItem.vue';

export default {
	name: 'RecordList',
	components: {
		RecordListItem,
	},
	props: {
		records: Array,
	},
};
</script>
