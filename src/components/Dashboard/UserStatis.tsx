'use client'

import * as React from "react"
import { Label, Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Static data to simulate the data
const usersData = [
  {
    "_id": "67b886e86f7bc22a65d760b1",
    "name": "Tonmoy Ahamed",
    "email": "tonmoyahamed2009@gmail.com",
    "photo": "https://lh3.googleusercontent.com/a/ACg8ocJopK2O7LuP3NqbUCwWb5qc9tikafI1kS52XhNOXo4771wV4yWU=s96-c",
    "role": "user",
    "timestamp": 1740146408730, // January
  },
  {
    "_id": "67b887116f7bc22a65d760b2",
    "email": "rahim@gmail.com",
    "name": "Rahim",
    "photo": "https://i.ibb.co/9k5RZnLm/images-1.jpg",
    "role": "user",
    "timestamp": 1740146449389, // January
  },
  {
    "_id": "67b9384c6f7bc22a65d760f6",
    "email": "bot@gmail.com",
    "name": "BotRaj",
    "photo": "https://i.ibb.co.com/GvGW6Wn1/71-Mt4-JAZQt-L-AC-SL1500.jpg",
    "role": "user",
    "timestamp": 1740191821837, // February
  },
  // Additional users with different timestamps
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
  january: {
    label: "January",
    color: "hsl(var(--chart-1))",
  },
  february: {
    label: "February",
    color: "hsl(var(--chart-2))",
  },
  march: {
    label: "March",
    color: "hsl(var(--chart-3))",
  },
  april: {
    label: "April",
    color: "hsl(var(--chart-4))",
  },
  may: {
    label: "May",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function UserStatChart() {
  const id = "pie-interactive"
  const [activeMonth, setActiveMonth] = React.useState("january")
  const [desktopData, setDesktopData] = React.useState<any[]>([])

  // Calculate the user statistics by month
  React.useEffect(() => {
    const months = ["january", "february", "march", "april", "may"]
    const monthCounts: { [key: string]: number } = months.reduce((acc, month) => {
      acc[month] = 0
      return acc
    }, {})

    // This Project Purpose FOr User See the Staties



    // Process the users data to count the number of users per month
    usersData.forEach((user: { timestamp: number }) => {
      const date = new Date(user.timestamp)
      const month = months[date.getMonth()] // Get month name from 0 to 4
      monthCounts[month] += 1
    })

    // Map the counts into chart data format
    const chartData = Object.keys(monthCounts).map((month) => ({
      month,
      desktop: monthCounts[month],
      fill: `var(--color-${month})`,
    }))

    setDesktopData(chartData)
  }, [])

  const activeIndex = React.useMemo(
    () => desktopData.findIndex((item) => item.month === activeMonth),
    [activeMonth, desktopData]
  )

  const months = React.useMemo(() => desktopData.map((item) => item.month), [desktopData])

  return (
    <Card data-chart={id} className="flex flex-col">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Pie Chart - Interactive</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </div>
        <Select value={activeMonth} onValueChange={setActiveMonth}>
          <SelectTrigger
            className="ml-auto h-7 w-[130px] rounded-lg pl-2.5"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Select month" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {months.map((key) => {
              const config = chartConfig[key as keyof typeof chartConfig]

              if (!config) {
                return null
              }

              return (
                <SelectItem
                  key={key}
                  value={key}
                  className="rounded-lg [&_span]:flex"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className="flex h-3 w-3 shrink-0 rounded-sm"
                      style={{
                        backgroundColor: `var(--color-${key})`,
                      }}
                    />
                    {config?.label}
                  </div>
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={desktopData}
              dataKey="desktop"
              nameKey="month"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {desktopData[activeIndex]?.desktop.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
