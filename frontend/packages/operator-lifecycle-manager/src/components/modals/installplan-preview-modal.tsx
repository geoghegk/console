import * as React from 'react';
import { safeDump } from 'js-yaml';
import {
  createModalLauncher,
  ModalTitle,
  ModalBody,
  ModalFooter,
} from '@console/internal/components/factory/modal';
import { ResourceLink, CopyToClipboard } from '@console/internal/components/utils';
import { referenceForStepResource } from '../index';
import { StepResource } from '../../types';

const InstallPlanPreview: React.FC<InstallPlanPreviewModalProps> = ({ cancel, stepResource }) => (
  <div className="modal-content">
    <ModalTitle>
      Install Plan Preview{' '}
      <ResourceLink
        linkTo={false}
        name={stepResource.name}
        kind={referenceForStepResource(stepResource)}
      />
    </ModalTitle>
    <ModalBody>
      <CopyToClipboard value={safeDump(JSON.parse(stepResource.manifest))} />
    </ModalBody>
    <ModalFooter inProgress={false}>
      <button type="button" onClick={() => cancel()} className="btn btn-default">
        OK
      </button>
    </ModalFooter>
  </div>
);

export const installPlanPreviewModal = createModalLauncher<InstallPlanPreviewModalProps>(
  InstallPlanPreview,
);

export type InstallPlanPreviewModalProps = {
  stepResource: StepResource;
  cancel?: () => void;
  close?: () => void;
};

InstallPlanPreview.displayName = 'InstallPlanPreview';
