<template>
	<nav class="navbar fixed-top navbar-dark bg-primary">
		<span class="navbar-brand mb-0 h1">Simple Weight Tracker</span>
		<form class="form-inline ml-auto">
			<button class="btn btn-secondary" type="button" @click="$emit('openAddRecordModal')">New Record</button>
		</form>
	</nav>
</template>


<script>
export default {
	name: 'Header',
}
</script>
