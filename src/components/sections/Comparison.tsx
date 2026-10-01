import { Check, Minus } from "lucide-react";
import { comparison, type ComparisonValue } from "@/data/content";
import { cn } from "@/lib/cn";
import { Section } from "@/components/ui/Section";

function Value({ value }: { value: ComparisonValue }) {
  return (
    <span className={cn("inline-flex items-start gap-2", value.good ? "font-semibold text-ink" : "text-ink-muted")}>
      {value.good ? (
        <Check aria-hidden="true" className="mt-[0.2em] h-4 w-4 shrink-0 text-success" strokeWidth={2.5} />
      ) : (
        <Minus aria-hidden="true" className="mt-[0.2em] h-4 w-4 shrink-0 text-ink-muted" />
      )}
      {value.text}
    </span>
  );
}

export function Comparison() {
  const [diy, agency, wasd] = comparison.columns;
  return (
    <Section id="comparativa" title={comparison.title} intro={comparison.intro} alt>
      {/* Escritorio y tablet: tabla */}
      <div data-reveal className="hidden overflow-hidden rounded-card border border-line bg-surface md:block">
        <table className="w-full border-collapse text-left text-[0.9375rem]">
          <caption className="sr-only">Comparación entre hacerlo tú mismo, una agencia tradicional y WASD</caption>
          <thead>
            <tr className="border-b border-line">
              <th scope="col" className="w-[28%] px-6 py-4 font-medium text-ink-muted">
                <span className="sr-only">Característica</span>
              </th>
              <th scope="col" className="px-6 py-4 font-semibold text-ink">{diy}</th>
              <th scope="col" className="px-6 py-4 font-semibold text-ink">{agency}</th>
              <th scope="col" className="bg-primary-soft px-6 py-4 font-display text-base font-bold text-primary">
                {wasd}
              </th>
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row) => (
              <tr key={row.label} className="border-b border-line last:border-b-0">
                <th scope="row" className="px-6 py-4 font-medium text-ink">
                  {row.label}
                </th>
                {row.values.map((value, i) => (
                  <td key={i} className={cn("px-6 py-4 align-top", i === 2 && "bg-primary-soft")}>
                    <Value value={value} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Móvil: una tarjeta por fila, WASD resaltado */}
      <ul className="space-y-3 md:hidden">
        {comparison.rows.map((row) => (
          <li key={row.label} data-reveal className="rounded-card border border-line bg-surface p-5">
            <h3 className="font-sans text-base font-semibold text-ink">{row.label}</h3>
            <dl className="mt-3 space-y-2 text-[0.9375rem]">
              {row.values.map((value, i) => (
                <div
                  key={i}
                  className={cn(
                    "grid grid-cols-[7.5rem_1fr] gap-3",
                    i === 2 && "-mx-2 rounded-lg bg-primary-soft px-2 py-1.5",
                  )}
                >
                  <dt className={cn("text-sm", i === 2 ? "font-bold text-primary" : "text-ink-muted")}>
                    {comparison.columns[i]}
                  </dt>
                  <dd>
                    <Value value={value} />
                  </dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </Section>
  );
}
