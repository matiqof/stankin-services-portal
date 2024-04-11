import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';
import {Column, CompactTable} from "@table-library/react-table-library/compact";
import {data, TableItem} from "./data.ts";
import {TableStyles} from "./styles.ts";



const Table = () => {
    const theme = useTheme([
        getTheme(),
        TableStyles
    ]);

    const COLUMNS: Column<TableItem>[] = [
        { label: "Предмет", renderCell: (item) => item.name},
        { label: "М1", renderCell: (item) => item.m1 },
        { label: "М2", renderCell: (item) => item.m2 },
        { label: "К", renderCell: (item) => item.coursework },
        { label: "З", renderCell: (item) => item.university_credit },
        { label: "Э", renderCell: (item) => item.exam },
        { label: "К", renderCell: (item) => item.coefficient },
    ];

    return (
        <CompactTable columns={COLUMNS} data={data} theme={theme} />
    );
};

export default Table;