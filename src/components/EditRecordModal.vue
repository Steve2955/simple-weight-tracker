<template>
	<div id="editRecordModal" class="modal" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Edit Record</h5>
				</div>
				<div class="modal-body">
					<div v-if="record" class="input-group mb-2">
						<input type="number" v-model.number="record.weight" min="0" class="form-control" placeholder="Enter your weight" aria-label="your weight" aria-describedby="basic-addon2">
						<div class="input-group-append">
							<span class="input-group-text" id="basic-addon2">kg</span>
						</div>
					</div>
					<div v-if="record" class="input-group">
						<input type="date" v-model="_date" min="0" class="form-control" placeholder="Date of record" aria-label="date">
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" @click="$emit('update:active', false)" data-dismiss="modal">Cancel</button>
					<button type="button" class="btn btn-primary" @click="updateRecord">Save changes</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import $ from 'jquery';

export default {
	name: 'EditRecordModal',
	props: {
		active: Boolean,
		record: Object,
	},
	watch: {
		active: function (newVal) {
			$('#editRecordModal').modal(newVal?'show':'hide');
		}
	},
	computed: {
		_date: {
			get(){
				let {date} = this.record;
				return `${date.getFullYear()}-${('0'+(date.getMonth()+1)).substr(-2)}-${('0'+date.getDate()).substr(-2)}`;
			},
			set(newVal){
				this.record.date = new Date(newVal);
			}
		}
	},
	methods: {
		updateRecord: function(){
			this.$emit('updateRecord', this.record);
			this.$emit('update:active', false);
			this.weight = undefined;
		},
	},
};
</script>
