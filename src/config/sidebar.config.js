import { StarOutline,SendOutlined,InsertDriveFileOutlined,DeleteOutlined, MailOutlined } from "@mui/icons-material"

export const SIDEBAR_DATA = [
  {
    name: "inbox",
    title: "Inbox",
    icon: MailOutlined,
  },
  {
    name: "starred",
    title: "Starred",
    icon: StarOutline,
  },
  {
    name: "sent",
    title: "Sent",
    icon: SendOutlined,
  },
  {
    name: "drafts",
    title: "Draft",
    icon: InsertDriveFileOutlined,
  },
  {
    name: "bin",
    title: "Bin",
    icon: DeleteOutlined,
  },
]