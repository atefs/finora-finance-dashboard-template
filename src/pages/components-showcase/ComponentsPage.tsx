import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageHeader from "@/components/layout/PageHeader";
import FormsTab from "./tabs/FormsTab";
import FeedbackTab from "./tabs/FeedbackTab";
import ActionsTab from "./tabs/ActionsTab";
import DataDisplayTab from "./tabs/DataDisplayTab";
import LayoutTab from "./tabs/LayoutTab";
import AuthPreviewTab from "./tabs/AuthPreviewTab";

export default function ComponentsPage() {
  return (
    <div>
      <PageHeader title="Components Showcase" breadcrumb="Home / Components" />
      <Tabs defaultValue="forms" className="w-full">
        <TabsList className="mb-6 w-full flex-nowrap justify-start overflow-x-auto">
          <TabsTrigger value="forms">Forms & Inputs</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="actions">Actions</TabsTrigger>
          <TabsTrigger value="data">Data Display</TabsTrigger>
          <TabsTrigger value="layout">Layout</TabsTrigger>
          <TabsTrigger value="auth">Auth Preview</TabsTrigger>
        </TabsList>
        <TabsContent value="forms">
          <FormsTab />
        </TabsContent>
        <TabsContent value="feedback">
          <FeedbackTab />
        </TabsContent>
        <TabsContent value="actions">
          <ActionsTab />
        </TabsContent>
        <TabsContent value="data">
          <DataDisplayTab />
        </TabsContent>
        <TabsContent value="layout">
          <LayoutTab />
        </TabsContent>
        <TabsContent value="auth">
          <AuthPreviewTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
