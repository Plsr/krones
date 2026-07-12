import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import everydayPrices from '@/data/everyday-prices.json'

const { rate, items: data } = everydayPrices

export const PricingTable = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Prices of common Items</CardTitle>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
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
