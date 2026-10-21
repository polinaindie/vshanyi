import { AboutBlock } from '../../components/AboutBlock/AboutBlock'
import '../../components/AboutBlock/AboutBlock.css'

/** Секція image+text — той самий характер, що About; окрема story для layout-каталогу. */
export function ImageText() {
  return (
    <AboutBlock
      lead="Жодна країна не народжується з готовою культурою памʼяті — її формують роками."
      copy="Україна проходить цей шлях зараз, і ми — його частина. Структура секції: свідчення зліва, текст справа — без карток і ефектів."
      linkLabel="Про місію →"
    />
  )
}
