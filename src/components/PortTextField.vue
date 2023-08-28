<template>
    <v-text-field v-model="port"
                  prefix="Port: "
                  class="port-field"
                  placeholder="___"
                  height="28"
                  outlined
                  hide-details />
</template>

<script>
import { settings } from '../views/settings/defaults'

    export default {
        name: 'PortTextField',
        props: {
            settings: Object
        },
        computed: {
            port: {
                get () {
                    return this.settings.port || ''
                },
                set (value) {
                    this.$emit('input', value)
                }
            }
        }
    }
</script>

<style lang="scss">
    .port-field {
        margin: 0 0 0 20px !important;
        width: 120px !important;

        &.error--text input {
            color: var(--v-error-base);
        }

        &.v-text-field--outlined {
            fieldset {
                border-width: 0 !important;
            }

            .v-input__slot {
                min-height: 0 !important;
                background-color: var(--v-controls-darken1);

                input:not(:disabled):not(:empty)::placeholder {
                    color: var(--v-text-base);
                }
            }
        }
    }
</style>
