"use client";
import { MdPreview, MdCatalog } from "md-editor-rt";

export default function MarkDown({ isi }: { isi: string }) {
  return <MdPreview modelValue={isi} />;
}
