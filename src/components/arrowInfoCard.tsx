import {
  PresenceBadgeStatus,
  Avatar,
  DataGridBody,
  DataGridRow,
  DataGrid,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridCell,
  TableCellLayout,
  TableColumnDefinition,
  createTableColumn,
  Card,
  CardHeader,
  Label,
} from "@fluentui/react-components";
import { MacScrollbar } from "mac-scrollbar";
import { MdOutlineMedicalInformation } from "react-icons/md";
import c from "classnames";
type FileCell = {
  label: string;
};

type LastUpdatedCell = {
  label: string;
  timestamp: number;
};

type AuthorCell = {
  label: string;
  status: PresenceBadgeStatus;
};

type Item = {
  file: FileCell;
  author: AuthorCell;
  lastUpdated: LastUpdatedCell;
};

const items: Item[] = [
  {
    file: { label: "Pin 1" },
    author: { label: "ok", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
  },
  {
    file: { label: "Pin 2" },
    author: { label: "Err", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
  },
  {
    file: { label: "Pin 3" },
    author: { label: "ok", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
  },
  {
    file: { label: "Pin 4" },
    author: { label: "Err", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
  },
  {
    file: { label: "Pin 5" },
    author: { label: "ok", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
  },
  {
    file: { label: "Pin 6" },
    author: { label: "Err", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
  },
  {
    file: { label: "Pin 7" },
    author: { label: "ok", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
  },
  {
    file: { label: "Pin 8" },
    author: { label: "Err", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
  },
  {
    file: { label: "Pin 9" },
    author: { label: "ok", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
  },
  {
    file: { label: "Pin 10" },
    author: { label: "Err", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
  },
  {
    file: { label: "Pin 11" },
    author: { label: "ok", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
  },
  {
    file: { label: "Pin 12" },
    author: { label: "Err", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
  },
  {
    file: { label: "Pin 13" },
    author: { label: "ok", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
  },
  {
    file: { label: "Pin 14" },
    author: { label: "Err", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
  },
  {
    file: { label: "Pin 15" },
    author: { label: "ok", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
  },
  {
    file: { label: "Pin 16" },
    author: { label: "Err", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
  },
  {
    file: { label: "Pin 17" },
    author: { label: "ok", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
  },
  {
    file: { label: "Pin 18" },
    author: { label: "Err", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
  },
  {
    file: { label: "Pin 19" },
    author: { label: "ok", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
  },
  {
    file: { label: "Pin 20" },
    author: { label: "Err", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
  },
  {
    file: { label: "Pin 21" },
    author: { label: "ok", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
  },
  {
    file: { label: "Pin 22" },
    author: { label: "Err", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
  },
  {
    file: { label: "Pin 23" },
    author: { label: "ok", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
  },
  {
    file: { label: "Pin 24" },
    author: { label: "Err", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
  },
  {
    file: { label: "Pin 25" },
    author: { label: "ok", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
  },
  {
    file: { label: "Pin 26" },
    author: { label: "Err", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
  },
  {
    file: { label: "Pin 27" },
    author: { label: "ok", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
  },
  {
    file: { label: "Pin 28" },
    author: { label: "Err", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
  },
  {
    file: { label: "Pin 29" },
    author: { label: "ok", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
  },
  {
    file: { label: "Pin 30" },
    author: { label: "Err", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
  },
];
const columns: TableColumnDefinition<Item>[] = [
  createTableColumn<Item>({
    columnId: "ChipPins",
    renderHeaderCell: () => {
      return "Chip Pins";
    },
    renderCell: (item) => {
      return <TableCellLayout>{item.file.label}</TableCellLayout>;
    },
  }),
  createTableColumn<Item>({
    columnId: "state",
    renderHeaderCell: () => {
      return "State";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout
          media={
            <Avatar
              aria-label={item.author.label}
              name={item.author.label}
              badge={{ status: item.author.status }}
            />
          }
        >
          {item.author.label}
        </TableCellLayout>
      );
    },
  }),
  createTableColumn<Item>({
    columnId: "lastUpdated",
    renderHeaderCell: () => {
      return "Last updated";
    },

    renderCell: (item) => {
      return item.lastUpdated.label;
    },
  }),
];

const ArrowInfoCard = () => {
  return (
    <Card className={c("min-w-[600px]")}>
      <CardHeader
        header={
          <div className="flex items-center gap-1">
            <MdOutlineMedicalInformation size={30} color="#000000" />
            <Label>参数</Label>
          </div>
        }
      />
      <MacScrollbar className="w-full h-full overflow-y-auto">
        <DataGrid
          selectionMode="multiselect"
          items={items}
          columns={columns}
          focusMode="composite"
        >
          <DataGridHeader>
            <DataGridRow>
              {({ renderHeaderCell }) => (
                <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
              )}
            </DataGridRow>
          </DataGridHeader>

          <DataGridBody<Item>>
            {({ item, rowId }) => (
              <DataGridRow<Item> key={rowId}>
                {({ renderCell }) => (
                  <DataGridCell>{renderCell(item)}</DataGridCell>
                )}
              </DataGridRow>
            )}
          </DataGridBody>
        </DataGrid>
      </MacScrollbar>
    </Card>
  );
};

export default ArrowInfoCard;
