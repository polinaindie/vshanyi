export type ValuesStripProps = {
  values?: string[]
  note?: string
}

export function ValuesStrip({
  values = ['Памʼять', 'Повага', 'Дія'],
  note = 'Три слова — один перехід: від полеглих до живих.',
}: ValuesStripProps) {
  return (
    <section className="vshanuy-values" aria-label="Цінності">
      <div className="vshanuy-values__row">
        {values.map((value) => (
          <p key={value} className="vshanuy-values__item">
            {value}
          </p>
        ))}
      </div>
      <p className="vshanuy-values__note">{note}</p>
    </section>
  )
}
