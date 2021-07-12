<template>
	<div class="settings-item">
		<span>{{ title }}</span>
		<select>
			<option
				v-for="option in optionsList"
				:key="option"
				:value="option"
			>
				{{ option }}
			</option>
		</select>
	</div>
</template>

<script>

export default {
	name: 'SettingsItem',
	props: {
		title: {
			type: String,
			required: true,
		},
		optionsList: {
			type: Array,
			required: true,
		},
	},
};

</script>

<style scoped lang="scss">

.settings-item {
	display: flex;
	flex: 1;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 5rem;
	width: 50rem;
	max-width: 100%;
	border-radius: 2.2rem;
	padding: 0 2rem;
	background-color: #2D2C3F;
	margin: 1rem 0;

	& select {
		background: transparent;
		border: none;
		color: #ffffff;

		& option {
			color: #1E1B2E;
		}
	}

	& * {
		font-size: 24px;

		@media (max-width: 768px) {
			font-size: 16px;
		}
	}
}

</style>
