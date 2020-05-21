<template>
	<div>
		<span><strong>{{record.weight}} kg</strong></span>
		<span class="ml-2"><small>{{record.date | formatDate}}</small></span>
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
