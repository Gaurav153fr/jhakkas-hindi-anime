import {  FormEvent } from "react";
import { EditSeriesById } from "@/lib/POST";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";
import { Edit3Icon } from "lucide-react";

export default function SeriesTable(rowData:Row) {
  
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    console.log(event.target.name.value)
    event.preventDefault();
    if (!rowData) return;

    try {
      await EditSeriesById(rowData.id.toString(), event.target.name.value, event.target.slug.value, event.target.url.value, event.target.sypnosis.value);
      console.log("Changes saved successfully:", rowData.name, rowData.slug, rowData.url, rowData.sypnosis);
      // Optionally handle success message or redirect after save
    } catch (error) {
      console.error("Error saving changes:", error);
      // Optionally handle error message or fallback behavior
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
 
   
  };

  if (!rowData) {
    return <div>Loading...</div>; // Optional loading indicator
  }

  return (
    <main>
      <Dialog>
      <DialogTrigger asChild><Button variant="default">Edit Series <Edit3Icon/></Button></DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>

          <DialogTitle> Edit Series</DialogTitle>
        </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  defaultValue={rowData.name}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="slug" className="text-right">
                  Slug
                </Label>
                <Input
                  id="slug"
                  name="slug"
                  defaultValue={rowData.slug}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="url" className="text-right">
                  Image URL
                </Label>
                <Input
                  id="url"
                  name="url"
                  defaultValue={rowData.url}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="synopsis" className="text-right">
                  Synopsis
                </Label>
                <Input
                  id="synopsis"
                  name="synopsis"
                  defaultValue={rowData.sypnosis}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="date" className="text-right">
                  Date created
                </Label>
                <Input
                  id="date"
                  name="sypnosis"
                  value={rowData.created_on}
                  disabled
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save Changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  );
};

