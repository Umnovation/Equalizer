<script setup>
import {ref} from 'vue';
import html2canvas from "html2canvas";

document.title = 'Эквалайзер | Нечто';
const sliders = ref({
  one: 50,
  two: 50,
  three: 50,
  four: 50,
  five: 50,
  six: 50,
  seven: 50,
  eight: 50,
});

const label = ref(
    {
      one: {
        low: 'Заниженная самооценка',
        high: 'Завышенная самооценка',
      },
      two: {
        low: 'Инфантильность',
        high: 'Паранойя',
      },
      three: {
        low: 'Незащищенность',
        high: 'Высокая конфликтность',
      },
      four: {
        low: 'Излишне отдающий',
        high: 'Излишне забирающий',
      },
      five: {
        low: 'Невидимка',
        high: 'Гипер проявленность',
      },
      six: {
        low: 'Избыточная осторожность',
        high: 'Все или ничего',
      },
      seven: {
        low: 'Тотально честный',
        high: 'Разрушающий обман',
      },
      eight: {
        low: 'Все или ничего',
        high: 'Гипер закрытость',
      }
    }
);
const takeScreenshot = async () => {
  const element = document.getElementById('screenshotElement');
  // Создание скриншота
  const canvas = await html2canvas(element);
  // Создание изображения для загрузки
  const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  // Сохранение изображения
  const link = document.createElement('a');
  link.download = 'equalizer.png';
  link.href = image;
  link.click();
}

const edit = ref(false);

</script>

<template>
  <div style="max-width: 1200px; margin: 0 auto; padding-top: 100px;">
    <div id="screenshotElement">
      <PrimeCard>
        <template #title>
          <div class="text-center">Эквалайзер</div>
        </template>
        <template #content>
          <div class="flex justify-content-around flex-wrap">
            <div class="flex flex-column align-items-center sm:col-4 mt-2 mb-2" v-for="(item, index) in label" :key="index" style="max-width: 140px;">
              <div class="mb-3 text-center" style="min-height: 50px;">
                {{ item.high }}
              </div>
              <PrimeSlider v-model="sliders[index]" orientation="vertical" class="h-14rem" :min="0" :max="100"/>
              <div class="mt-3 text-center" style="min-height: 50px;">
                {{ item.low }}
              </div>
            </div>
          </div>
        </template>
      </PrimeCard>
    </div>
    <div>
      <div class="flex justify-content-center mt-4">
        <PrimeButton @click="edit = true">Редактировать</PrimeButton>
        <PrimeButton class="ml-3" @click="takeScreenshot">Сделать скриншот</PrimeButton>
      </div>
      <div class="text-center mt-5">
        <div>Сделано для Нечто</div>
        <div>Разработно <a href="https://t.me/VladislavUmnov" style="text-decoration: none" target="_blank" class="text-cyan-500">Владиславом
          Умновым</a>
        </div>
        <div>
          Десятка №33
        </div>
      </div>
    </div>
  </div>
  <PrimeDialog v-model:visible="edit" modal header="Редактировать">
    <span class="p-text-secondary block mb-5">Редактирование лейблов эквалайзера.</span>
    <div class="flex justify-content-around gap-1 flex-wrap">
      <div v-for="(item, index) in label" :key="index">
        <div class="flex align-items-center gap-3 mb-3">
          <InputText class="flex-auto" autocomplete="off" v-model="item.high" style="max-width: 190px;"/>
        </div>
        <div class="flex align-items-center gap-3 mb-5">
          <InputText class="flex-auto" autocomplete="off" v-model="item.low" style="max-width: 190px;"/>
        </div>
      </div>
    </div>
    <div class="flex justify-content-end gap-2">
      <PrimeButton type="button" label="Сохранить" @click="edit = false"></PrimeButton>
    </div>
  </PrimeDialog>
</template>

<style scoped>


</style>
