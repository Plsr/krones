import { Screen } from '@/components/Screen'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const rate = 0.13

const data = [
  { name: 'Gasoline (1 Ltr.)', price: 15.79 },
  { name: 'Cappucino', price: 45 },
  { name: 'Whopper', price: 70 },
  { name: 'Big Mac', price: 49 },
  { name: 'Milk', price: 14 },
  { name: 'Oat Milk', price: 22 },
]

const Prices = () => {
  return (
    <Screen>
      <Table>
        <TableHeader>
          <TableRow className='border-b border-b-neutral-200 dark:border-b-neutral-700'>
            <TableHead>Item</TableHead>
            <TableHead>DKK</TableHead>
            <TableHead>EUR</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableItem key={item.name} name={item.name} price={item.price} />
          ))}
        </TableBody>
      </Table>
    </Screen>
  )
}

type TableItemProps = {
  name: string
  price: number
}

const TableItem = ({ name, price }: TableItemProps) => {
  return (
    <TableRow className='border-b border-b-neutral-200 dark:border-b-neutral-700'>
      <TableCell>
        <span>{name}</span>
      </TableCell>
      <TableCell>{price} kr.</TableCell>
      <TableCell>{(price * rate).toFixed(2)} €</TableCell>
    </TableRow>
  )
}

export default Prices
