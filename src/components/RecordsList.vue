<template>
	<md-card>
		<md-card-header>
			<div class="md-title">History</div>
		</md-card-header>
		<md-card-content>
			<md-list class="md-double-line">
				<template v-for="(record, index) in records">
					<md-list-item :key="index">
						<div class="md-list-item-text">
							<span>{{record.weight}}</span>
							<span>{{record.date | formatDate}}</span>
						</div>
					</md-list-item>
					<md-divider v-if="index != records.length-1" :key="index"></md-divider>
				</template>
			</md-list>
		</md-card-content>
	</md-card>
</template>

<script>
export default {
	name: 'RecordsList',
	props: {
		records: Array,
	},
};
</script>
