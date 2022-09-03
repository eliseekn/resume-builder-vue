<template>
    <div class="py-3 px-5 border-b-2">
        <div class="flex justify-between items-center">
            <h1 class="font-medium text-xl">Resume Builder <small>(v0.1)</small></h1>

            <a href="https://github.com/eliseekn/resume-builder-vue" class="btn" target="_blank">
                By @eliseekn
            </a>

            <span>
                <select name="language" id="language" class="py-1 rounded-lg cursor-pointer mr-3" v-model="state" @change="handleSetLanguage">
                    <option value="en" selected>En</option>
                    <option value="fr">Fr</option>
                </select>

                <button type="button" class="btn" @click="handleDownloadResume">
                    Download
                </button>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    import {languageStore} from "../../services/store"
    import jsPDF from "jspdf"
    import html2canvas from "html2canvas"

    const state = ref<string>(languageStore.state)
    const handleSetLanguage = () => {languageStore.set(state.value)}

    //https://www.freakyjolly.com/multipage-canvas-pdf-using-jspdf/
    const handleDownloadResume = async () => {
        const htmlContainer = document.querySelector("#resume-content") as HTMLElement
        const htmlHeight = htmlContainer?.clientHeight
        const htmlWidth = htmlContainer?.clientWidth

        const pdfWidth = htmlWidth
        const pdfHeight = (pdfWidth * 1.5)
        const totalPDFPages = Math.ceil(pdfHeight/pdfWidth) - 1

        html2canvas(htmlContainer,{allowTaint:true})
            .then(canvas => {
                canvas.getContext('2d')

                const imgData = canvas.toDataURL("image/jpeg", 1.0)
                const pdf = new jsPDF('p', 'pt',  [pdfWidth, pdfHeight])

                pdf.addImage(imgData, 'JPG', 0, 0, htmlWidth, htmlHeight)

                for (let i = 1; i <= totalPDFPages; i++) {
                    pdf.addPage([pdfWidth, pdfHeight])
                    pdf.addImage(imgData, 'JPG', 0, - (pdfHeight * i), htmlWidth, htmlHeight)
                }

                pdf.save("resume.pdf")
            })
    }

</script>
