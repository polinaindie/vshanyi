import gromadyPhoto from '../assets/about/directions/napryam-gromady.webp'
import biznesPhoto from '../assets/about/directions/napryam-biznes.webp'
import derzhavaPhoto from '../assets/about/directions/napryam-derzhava.webp'
import suspilstvoPhoto from '../assets/about/directions/napryam-suspilstvo.webp'
import osvitaPhoto from '../assets/about/directions/napryam-osvita.webp'
import viyskoPhoto from '../assets/about/directions/napryam-viysko.webp'
import mystetstvoPhoto from '../assets/about/directions/napryam-mystetstvo.webp'

export type DirectionItem = {
  index: string
  title: string
  description: string
  href: string
  image?: string
  imageAlt?: string
  caption?: string
}

/** Усі напрями — головна (карусель), «Напрями роботи», About. */
export const defaultDirectionItems: DirectionItem[] = [
  {
    index: '01',
    title: 'Громади',
    href: 'napryamky/gromada.html',
    image: gromadyPhoto,
    description:
      'Працюємо з громадами та координаторами осередків, допомагаємо створювати й впроваджувати локальні практики памʼяті. Поширюємо ініціативи в громадах, розробляємо ритуали памʼяті та прощання.',
  },
  {
    index: '02',
    title: 'Бізнес',
    href: 'napryamky/spivpratsya-z-biznesom.html',
    image: biznesPhoto,
    description:
      'Допомагаємо бізнесу інтегрувати культуру памʼяті у свої комунікації. Проводимо консультації, аудити, лекції та сесії, щоб компанії могли говорити про війну, втрати й памʼять.',
  },
  {
    index: '03',
    title: 'Держава',
    href: 'napryamky/derzhava.html',
    image: derzhavaPhoto,
    description:
      'Передаємо державним інституціям напрацьовані практики, рекомендації та інструкції й працюємо над їхнім системним впровадженням.',
  },
  {
    index: '04',
    title: 'Суспільство',
    href: 'napryamky/suspilstvo.html',
    image: suspilstvoPhoto,
    description:
      'Говоримо про складні й важливі теми, повʼязані з памʼяттю про війну: як прощатися, як говорити про загиблих, як уникати знеособлення втрат.',
  },
  {
    index: '05',
    title: 'Освіта',
    href: 'napryamky/osvita.html',
    image: osvitaPhoto,
    description:
      'Досліджуємо, як діти, підлітки та вчителі сприймають тему памʼяті й якою хочуть бачити розмову про неї в школі. Розробляємо практичні матеріали для освітян, проводимо лекції та зустрічі, створюємо документи-опори для роботи з темою памʼяті.',
  },
  {
    index: '06',
    title: 'Військо',
    href: 'napryamky/viysko.html',
    image: viyskoPhoto,
    description:
      'Досліджуємо військові ритуали й традиції та шукаємо способи зберігати їхню тяглість у сучасному українському війську. Працюємо над створенням церемоній прощання з військовослужбовцями, які можуть бути адаптовані та впроваджені в громадах по всій Україні.',
  },
  {
    index: '07',
    title: 'Мистецтво',
    href: 'napryamky/mystetstvo.html',
    image: mystetstvoPhoto,
    description: 'Використовуємо мистецтво як спосіб говорити про памʼять, людей і наш досвід.',
  },
]
