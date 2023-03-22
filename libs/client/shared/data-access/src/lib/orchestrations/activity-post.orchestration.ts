import { ClientOperation, ClientOrchestration, IClientOrchestration } from "@orcha/angular";
import { InvolvemintOrchestrations, IActivityPostOrchestration } from '@involvemint/shared/domain';


@ClientOrchestration(InvolvemintOrchestrations.activityPost)
export class ActivityPostOrchestration implements IClientOrchestration<IActivityPostOrchestration> {
    @ClientOperation()
    list!: IClientOrchestration<IActivityPostOrchestration>['list'];

    @ClientOperation()
    create!: IClientOrchestration<IActivityPostOrchestration>['create'];

    @ClientOperation()
    like!: IClientOrchestration<IActivityPostOrchestration>['like'];

    @ClientOperation()
    unlike!: IClientOrchestration<IActivityPostOrchestration>['unlike'];

    @ClientOperation()
    displayComments!: IClientOrchestration<IActivityPostOrchestration>['displayComments'];

    @ClientOperation()
    enable!: IClientOrchestration<IActivityPostOrchestration>['enable'];

    @ClientOperation()
    disable!: IClientOrchestration<IActivityPostOrchestration>['disable'];
}