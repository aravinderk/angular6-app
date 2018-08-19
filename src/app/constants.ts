import { Injectable } from '@angular/core';

export const CONSTANT = {
  messages: {
    brandError: 'Error while getting brand.',
    addBrandSuccess: 'Brand added successfully.',
    addBrandError: 'Error while adding brand.',
    updateBrandSuccess: 'Brand updated successfully',
    updateBrandError: 'Error while updating brand.',
    deleteBrandSuccess: 'Brand deleted successfully.',
    deleteBrandError: 'Error while deleting brand.'
  }
}

@Injectable({
  providedIn: 'root'
})

export class constant {

}
