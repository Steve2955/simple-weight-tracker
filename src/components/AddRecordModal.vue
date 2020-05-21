<template>
	<div id="addRecordModal" class="modal" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Add new Record</h5>
				</div>
				<div class="modal-body">
					<div class="input-group">
						<input type="number" v-model.number="weight" min="0" class="form-control" placeholder="Enter your weight" aria-label="your weight" aria-describedby="basic-addon2">
						<div class="input-group-append">
							<span class="input-group-text" id="basic-addon2">kg</span>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" @click="$emit('update:active', false)" data-dismiss="modal">Cancel</button>
					<button type="button" class="btn btn-primary" @click="submitRecord()">Add Record</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import $ from 'jquery';

export default {
	name: 'AddRecordModal',
	data(){
		return {
			weight: undefined,
		};
	},
	props: {
		active: Boolean,
	},
	watch: {
		active: function (newVal) {
			$('#addRecordModal').modal(newVal?'show':'hide');
		}
	},
	methods: {
		submitRecord: function(){
			if(!this.weight || this.weight <= 0) return;
			this.$emit('addRecord', this.weight);
			this.$emit('update:active', false);
			this.weight = undefined;
		},
	},
};
</script>
