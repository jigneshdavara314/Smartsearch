<template>
    <div>
        <dl-button label="Open Popup">
            <dl-popup
                class="TestID"
                :style="{ '--dl-popup-padding': '0px' }"
                title="Edit Item Description"
                additional-info="Some additional information"
                subtitle="Some text for better explanation."
                with-close-button
                draggable
                @close-button-click="handleClear"
            >
                <dl-text-area
                    v-model="text"
                    :max-length="100"
                    show-counter
                    placeholder="Type your text"
                    width="203px"
                />
                <template #footer>
                    <dl-button fluid>
                        Save
                    </dl-button>
                </template>
            </dl-popup>
        </dl-button>
        <dl-button label="Open Empty State Popup">
            <dl-popup
                title="Edit Item Description"
                additional-info="Some additional information"
                subtitle="Some text for better explanation."
                with-close-button
                is-empty
                :empty-state-props="{
                    responsive: true,
                    style: 'min-height: 200px; max-width: 300px;',
                    bgSize: '130px',
                    bgImage: `url(https://raw.githubusercontent.com/dataloop-ai/icons/main/assets/usage.svg)`,
                    title: 'Lorem ipsum',
                    subtitle:
                        'Lorem ipsum dolor sit amet consectetur. Senectus condimentum dolor sit',
                    info: 'To learn more about this analytics, read our documentation.'
                }"
                @close-button-click="handleClear"
            >
                <template #links="">
                    <div style="display: flex; gap: 5px; padding: 0 20px">
                        <dl-button
                            padding="0px"
                            icon="icon-dl-sdk-documentation"
                            flat
                            uppercase
                            label="SDK"
                        />
                        <div class="break" />
                        <dl-button
                            padding="0px"
                            icon="icon-dl-file"
                            flat
                            label="Documentation"
                        />
                        <div class="break" />
                        <dl-button
                            padding="0px"
                            icon="icon-dl-youtube"
                            flat
                            label="Video"
                        />
                    </div>
                </template>
                <template #footer>
                    <dl-button fluid>
                        Save
                    </dl-button>
                </template>
            </dl-popup>
        </dl-button>
        <dl-button label="Open Popup persistent">
            <dl-popup
                title="Edit Item Description"
                additional-info="Some additional information"
                subtitle="Some text for better explanation."
                with-close-button
                persistent
            >
                <dl-text-area
                    v-model="text"
                    :max-length="100"
                    show-counter
                    placeholder="Type your text"
                    width="203px"
                />
                <template #close-button>
                    <dl-button
                        flat
                        style="padding-bottom: 0; padding-top: 0"
                        label="clear"
                        size="m"
                        @click="handleClear"
                    />
                </template>
                <template #footer>
                    <dl-button fluid>
                        Save
                    </dl-button>
                </template>
            </dl-popup>
        </dl-button>
        <dl-button label="Open Popup with max height 50px">
            <dl-popup
                title="Edit Item Description"
                additional-info="Some additional information"
                subtitle="Some text for better explanation."
                with-close-button
                max-height="50px"
            >
                <dl-text-area
                    v-model="text"
                    :max-length="100"
                    show-counter
                    placeholder="Type your text"
                    width="203px"
                />
                <template #close-button>
                    <dl-button
                        flat
                        style="padding-bottom: 0; padding-top: 0"
                        label="clear"
                        size="m"
                        @click="handleClear"
                    />
                </template>
                <template #footer>
                    <dl-button fluid>
                        Save
                    </dl-button>
                </template>
            </dl-popup>
        </dl-button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue-demi'
import { DlButton, DlPopup, DlTextArea } from '../components'

export default defineComponent({
    components: {
        DlButton,
        DlPopup,
        DlTextArea
    },
    data() {
        return {
            text: ''
        }
    },
    methods: {
        handleClear() {
            this.text = ''
        }
    }
})
</script>

<style>
#TestID {
    border: 1px solid red;
    background-color: blue;
}
.TestID {
    border: 1px solid red !important;
    background-color: blue;
}
</style>
