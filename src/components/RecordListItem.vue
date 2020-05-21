<template>
	<div class="d-flex">
		<span><strong>{{record.weight}} kg</strong></span>
		<span class="ml-2"><small>{{record.date | formatDate}}</small></span>
		<span class="material-icons ml-auto mr-2" @click="$emit('removeRecord', record)">remove_circle</span>
	</div>
</template>

<script>
export default {
	name: 'RecordListItem',
	props: {
		record: Object,
	},
};
</script>
