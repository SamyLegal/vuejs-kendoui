<template>
  <div class="hello">
    <h2>{{msg}}</h2>
    <form class="form-horizontal">
      <div class="form-group">
        <label class="col-sm-2 control-label">Date</label>
        <div class="col-sm-10">
          <kendo-datepicker id="date"
                            :min="minDate"
                            :max="maxDate"
                            :value="currentDate">
          </kendo-datepicker>
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label">Modal</label>
        <div class="col-sm-10">
          <modal :show.sync="showCustomModal" effect="fade" width="400">
            <div slot="modal-header" class="modal-header">
              <h4 class="modal-title">
                <i>Custom</i> <code>Modal</code> <b>Title</b>
              </h4>
            </div>
            <div slot="modal-body" class="modal-body">...</div>
            <div slot="modal-footer" class="modal-footer">
              <button type="button" class="btn btn-default" @click="showCustomModal = false">Exit</button>
              <button type="button" class="btn btn-success" @click="showCustomModal = false">Custom Save</button>
            </div>
          </modal>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <div class="checkbox">
            <label>
              <input type="checkbox"> Remember me
            </label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-default">Sign in</button>
        </div>
      </div>
    </form>

  </div>
</template>

<script>
  export default {
    name: 'form-view',
    data () {
      return {
        msg: 'Form View',
        minDate: new Date(2017, 9, 1),
        maxDate: new Date(2017, 10, 1),
        showCustomModal: false,
      }
    }
  }
</script>
