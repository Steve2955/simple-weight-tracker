<template>
	<nav class="navbar fixed-top navbar-dark bg-primary">
		<span class="navbar-brand mb-0 h1">Simple Weight Tracker</span>
		<form class="form-inline ml-auto">
			<button class="btn btn-secondary d-none d-sm-block" type="button" @click="$emit('openAddRecordModal')">New Record</button>
			<button class="btn btn-secondary font-weight-bold d-block d-sm-none py-1" type="button" @click="$emit('openAddRecordModal')">
				<span class="material-icons pt-1">add</span>
			</button>
		</form>
	</nav>
</template>


<script>
export default {
	name: 'Header',
}
</script>
